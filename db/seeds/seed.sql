
-- DROP DATABASE webdivs_development;

CREATE DATABASE IF NOT EXISTS webdivs_development;
\connect webdivs_development;
\i categories.sql;
\i webDivs.sql;

-- JOIN still non working correctly = can't get category from webDivs.category_id

-- SELECT webDivs.websiteTitle, webDivs.urls, webDivs.descriptionText, categories.category FROM webDivs JOIN categories ON webDivs.categories_id=categories.id;

-- websiteTitle, urls, categories_id, descriptionText