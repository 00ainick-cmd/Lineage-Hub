# Lineage Supabase Schema

## Config
- URL: https://chozbcrghlmianopmdxs.supabase.co
- Anon Key: sb_publishable_ciGFMc09hjhTRn40Wn_U6Q_sWSWCMMc

## Tables

### individuals
id (text PK), given_name, middle_name, surname, suffix, maiden_name, aliases (array), sex (default 'U'), living (bool default false), birth_year (int), birth_place, death_year (int), death_place, research_status (default 'not_started'), research_notes, family_line, generation (int), narrative, narrative_updated_at, gedcom_indi_id, user_id, created_at, updated_at

### events
id (text PK), type (NOT NULL), date_original, date_normalized, date_year (int), date_month (int), date_day (int), date_precision, date_qualifier, date_end_year (int), place_original, place_country, place_state, place_county, place_city, place_township, place_address, confidence (default 'possible'), description, user_id, created_at

### sources
id (text PK), type, subtype, title, repository, repository_ref, citation, date_created, date_captured, location_original, location_country, location_state, location_county, location_city, origin, information, processing_status (default 'raw'), transcription, image_urls (array), gedcom_source_id, user_id, created_at, updated_at

### claims
id (text PK), individual_id (FK→individuals NOT NULL), claim_type (NOT NULL), claim_value, source_id, event_id, evidence_type, evidence_text, analysis, reasoning (default 'direct'), confidence (default 'possible'), status, gps_score, reviewed_by, created_at, verification_date, verification_notes

### relationships
id (serial PK), individual_id (FK→individuals NOT NULL), related_to_id (FK→individuals NOT NULL), type, role, description, confidence (default 'possible'), source_id, user_id

### family_line_dashboard
(empty, structure TBD)

### research_log
(empty, structure TBD)
