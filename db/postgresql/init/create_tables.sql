-- Creando tabla: 

-- PAIS
CREATE TABLE md_country (
  id SERIAL PRIMARY KEY,
  country_id INTEGER,
  country_name VARCHAR(225)
);

-- DISTRITO
CREATE TABLE md_district (
  id SERIAL PRIMARY KEY,
  district_id INTEGER,
  district_name VARCHAR(225),
  province_id INTEGER
);

-- PROVINCIA
CREATE TABLE md_province (
  id SERIAL PRIMARY KEY,
  province_id INTEGER,
  province_name VARCHAR(225),
  region_id INTEGER
);

-- REGION
CREATE TABLE md_region (
  id SERIAL PRIMARY KEY,
  region_id INTEGER,
  region_name VARCHAR(225),
  country_id INTEGER
);

-- CALLES
CREATE TABLE md_street (
  id SERIAL PRIMARY KEY,
  street_id INTEGER,
  streetname VARCHAR(225),
  streettype_id INTEGER,
  district_id INTEGER
);

-- TIPO DE CALLE
CREATE TABLE md_streettype (
  id SERIAL PRIMARY KEY,
  streettype_id INTEGER,
  streettype_name VARCHAR(225)
);

-- SELECT count(*) FROM md_street;

