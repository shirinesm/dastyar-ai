-- 1. جدول تنظیمات کاربر (User Settings)
CREATE TABLE IF NOT EXISTS user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  value_metric_enabled BOOLEAN DEFAULT FALSE,
  eisenhower_metric_enabled BOOLEAN DEFAULT FALSE,
  priority_metric_enabled BOOLEAN DEFAULT FALSE,
  notification_interval_hours INTEGER DEFAULT 1,
  notification_enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 2. جدول اولویت‌ها (Priorities)
CREATE TABLE IF NOT EXISTS priorities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  priority_order INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. جدول پاسخ‌ها و فعالیت‌ها (Metric Responses)
CREATE TABLE IF NOT EXISTS metric_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  period_start TIMESTAMPTZ NOT NULL,
  period_end TIMESTAMPTZ NOT NULL,
  value_metric TEXT CHECK (value_metric IN ('valuable', 'worthless', 'anti_value')),
  eisenhower_metric TEXT CHECK (eisenhower_metric IN ('important_urgent', 'important_not_urgent', 'not_important_urgent', 'not_important_not_urgent')),
  priority_ids UUID[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. جدول تحلیل‌های هوش مصنوعی (AI Analyses)
CREATE TABLE IF NOT EXISTS ai_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  metric_type TEXT NOT NULL CHECK (metric_type IN ('value', 'eisenhower', 'priority')),
  analysis_start TIMESTAMPTZ NOT NULL,
  analysis_end TIMESTAMPTZ NOT NULL,
  strengths TEXT,
  weaknesses TEXT,
  recommendations TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ایندکس‌ها برای افزایش سرعت کوئری‌ها
CREATE INDEX IF NOT EXISTS idx_metric_responses_user_id ON metric_responses(user_id);
CREATE INDEX IF NOT EXISTS idx_metric_responses_period ON metric_responses(period_start, period_end);
CREATE INDEX IF NOT EXISTS idx_priorities_user_id ON priorities(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_analyses_user_id ON ai_analyses(user_id);