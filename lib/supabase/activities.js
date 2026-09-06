import { supabase } from './client';

/**
 * دریافت تمام فعالیت‌ها/پاسخ‌های ثبت‌شده از Supabase
 */
export async function fetchMetricResponses() {
  const { data, error } = await supabase
    .from('metric_responses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('ارور در دریافت فعالیت‌ها از دیتابیس:', error.message);
    throw error;
  }

  return data;
}

/**
 * ثبت یک فعالیت/پاسخ جدید در Supabase
 * @param {Object} responseData
 */
export async function createMetricResponse(responseData) {
  const payload = {
    period_start: responseData.periodStart || new Date().toISOString(),
    period_end: responseData.periodEnd || new Date().toISOString(),
    value_metric: responseData.valueMetric || null,
    eisenhower_metric: responseData.eisenhowerMetric || null,
    priority_ids: responseData.priorityIds || [],
  };

  const { data, error } = await supabase
    .from('metric_responses')
    .insert([payload])
    .select();

  if (error) {
    console.error('ارور در ثبت فعالیت جدید:', error.message);
    throw error;
  }

  return data[0];
}