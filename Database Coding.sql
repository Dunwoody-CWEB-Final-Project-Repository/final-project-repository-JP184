-- Table: public.userpass

-- DROP TABLE public.userpass;

CREATE TABLE public.userpass
(
    id integer NOT NULL DEFAULT nextval('userpass_id_seq'::regclass),
    username character varying(100) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.userpass
    OWNER to postgres;

    