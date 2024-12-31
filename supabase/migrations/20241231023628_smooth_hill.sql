/*
  # Update RLS policies for public access
  
  1. Changes
    - Drop existing authenticated-only policies
    - Add new public access policies for read and write
  
  2. Security
    - Enable public access to recaps table
    - Allow anyone to read and write data
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON recaps;
DROP POLICY IF EXISTS "Enable insert access for authenticated users" ON recaps;

-- Create new public access policies
CREATE POLICY "Enable public read access"
  ON recaps
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Enable public insert access"
  ON recaps
  FOR INSERT
  TO public
  WITH CHECK (true);