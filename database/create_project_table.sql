CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial,
	"name" text,
	"image_path" text,
	"brief_description" text,
	"full_description" text,
	PRIMARY KEY( id )
);