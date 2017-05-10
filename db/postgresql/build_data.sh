
# create database
psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./init/create_db.sql

# create tables
psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./init/create_tables.sql

# insert content
#psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./insert_address/insert_md_country.sql

#psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./insert_address/insert_md_district.sql

#psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./insert_address/insert_md_province.sql

#psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./insert_address/insert_md_region.sql

#psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./insert_address/insert_md_street.sql
#psql -h localhost -p 5432 -U postgres astrum_map_production_pro < ./insert_address/insert_md_streettype.sql


#export PATH="/Library/PostgreSQL/9.6/bin:$PATH"
#psql -h localhost -p 5432 -U postgres astrum_map_production_pro


#postgres:@localhost:5432/astrum_map_production_pro


#local: 'postgres://postgres:@localhost:5432/astrum_map_production_pro',
#local_mac: 'postgres://joelengt:kuroyukihime2110@localhost:4002/astrum_map_production_pro'
