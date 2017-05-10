-- Creando base de datos

-- DROP DATABASE IF EXISTS astrum_map_production_pro;
CREATE DATABASE astrum_map_production_pro;

-- cambiando tematica de aceptar ascent
UPDATE pg_database SET encoding=8 WHERE datname='astrum_map_production_pro';

UPDATE pg_database SET datistemplate=FALSE WHERE datname='astrum_map_production_pro';

DROP DATABASE astrum_map_production_pro;

CREATE DATABASE astrum_map_production_pro WITH owner=postgres template=template0 encoding='UTF8';

UPDATE pg_database SET datistemplate=TRUE WHERE datname='astrum_map_production_pro';



UPDATE pg_database SET encoding='UTF8' WHERE datname='astrum_map_production_pro';
