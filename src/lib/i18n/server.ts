import fs from 'fs/promises';
import path from 'path';
import { Locale } from '@/src/lib/i18n/types/i18n';

export async function getServerTranslations(locale: Locale, namespaces: string[]) {
  const translations: Record<string, any> = {};

  for (const namespace of namespaces) {
    try {
      // 首先尝试使用绝对路径读取文件
      const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`);
      console.log('Attempting to read translation file:', filePath);
      
      try {
        // 尝试使用fs.readFile读取文件
        const content = await fs.readFile(filePath, 'utf-8');
        const parsedContent = JSON.parse(content);
        translations[namespace] = parsedContent;
        console.log(`Successfully loaded translations for ${locale}/${namespace} using fs.readFile`);
      } catch (fsError) {
        console.warn(`fs.readFile failed for ${locale}/${namespace}, trying fetch API:`, fsError);
        
        // 如果fs.readFile失败，尝试使用fetch API
        // 构建相对URL路径
        const relativePath = `/locales/${locale}/${namespace}.json`;
        console.log('Attempting to fetch translation file from:', relativePath);
        
        // 在服务器端使用fetch API
        // 注意：这需要一个完整的URL，在服务器端运行时可能需要调整
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}${relativePath}`);
        
        if (!response.ok) {
          throw new Error(`Fetch failed with status: ${response.status}`);
        }
        
        const data = await response.json();
        translations[namespace] = data;
        console.log(`Successfully loaded translations for ${locale}/${namespace} using fetch API`);
      }
    } catch (error) {
      console.error(`All attempts to load translations for ${locale}/${namespace} failed:`, error);
      translations[namespace] = {};
    }
  }

  const t = (key: string, params?: Record<string, string | number>): string => {
    // 检查 key 是否有效
    if (!key) {
      console.warn('Translation key is undefined or empty');
      return '';
    }

    // 遍历所有命名空间
    for (const namespace of namespaces) {
      const namespaceData = translations[namespace];
      if (!namespaceData) {
        console.log(`Namespace ${namespace} not found`);
        continue;
      }

      try {
        // 尝试在当前命名空间中查找完整的键路径
        const keys = key.split('.');
        let value: any = namespaceData;
        let found = true;

        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
            console.log(`Found key ${k} in path, current value:`, value);
          } else {
            found = false;
            console.log(`Key ${k} not found in path`);
            break;
          }
        }

        if (found && typeof value === 'string') {
          if (params) {
            const result = value.replace(/\{\{(\w+)\}\}/g, (_, param) => 
              String(params[param] ?? `{{${param}}}`)
            );
            console.log('Translation found with params:', result);
            return result;
          }
          console.log('Translation found:', value);
          return value;
        }
      } catch (error) {
        console.error(`Error looking up translation for key "${key}":`, error);
        continue;
      }
    }

    // 如果所有命名空间都没有找到翻译，返回键名并记录详细信息
    console.warn('Translation lookup failed:', {
      key,
      namespaces,
      availableKeys: namespaces.map(ns => ({
        namespace: ns,
        keys: Object.keys(translations[ns] || {})
      })),
      searchPath: key.split('.')
    });
    return key;
  };

  return { t, translations };
}