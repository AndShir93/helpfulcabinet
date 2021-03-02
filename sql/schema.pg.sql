DROP DATABASE IF EXISTS helpfulcabinet;
create database helpfulcabinet;
CREATE USER helpfulcabinet WITH PASSWORD 'helpfulcabinet';
GRANT ALL PRIVILEGES ON DATABASE helpfulcabinet to helpfulcabinet;
