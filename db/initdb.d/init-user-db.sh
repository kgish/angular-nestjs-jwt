#!/usr/bin/env bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER angular_nestjs;
	CREATE DATABASE angular_nestjs ENCODING UTF8;
	GRANT ALL PRIVILEGES ON DATABASE angular_nestjs TO angular_nestjs;

	ALTER USER angular_nestjs WITH PASSWORD 'angular_nestjs';
	ALTER USER angular_nestjs WITH SUPERUSER;
EOSQL
