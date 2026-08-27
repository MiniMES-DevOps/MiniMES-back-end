-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    unit_of_measure VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (or customized according to auth needs)
CREATE POLICY "Allow public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public insert access" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access" ON products FOR UPDATE USING (true);
CREATE POLICY "Allow public delete access" ON products FOR DELETE USING (true);
