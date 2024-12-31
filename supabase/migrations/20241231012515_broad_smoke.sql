/*
  # Create recaps table

  1. New Tables
    - `recaps`
      - `id` (uuid, primary key)
      - `photo` (text, stores base64 image data)
      - `process_date` (date)
      - `ship_date` (date)
      - `address` (text)
      - `tracking_number` (text)
      - `order_status` (enum: pending, processing, shipped, delivered)
      - `price` (numeric)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `recaps` table
    - Add policies for authenticated users to read and create recaps
*/

-- Create enum for order status
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered');

-- Create recaps table
CREATE TABLE IF NOT EXISTS recaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  photo text,
  process_date date NOT NULL,
  ship_date date NOT NULL,
  address text NOT NULL,
  tracking_number text NOT NULL,
  order_status order_status NOT NULL DEFAULT 'pending',
  price numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE recaps ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for authenticated users"
  ON recaps
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Enable insert access for authenticated users"
  ON recaps
  FOR INSERT
  TO authenticated
  WITH CHECK (true);