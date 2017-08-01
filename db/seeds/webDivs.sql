CREATE TABLE IF NOT EXISTS webDivs (
    id serial PRIMARY KEY,
    websiteTitle VARCHAR(255),
    urls VARCHAR(255),
    categories_id INT,
    descriptionText TEXT,
    urlphoto VARCHAR(255)
);


INSERT INTO webDivs (websiteTitle, urls, categories_id, descriptionText)
VALUES
    (
        'Google', 'https://www.google.com/', 9, 'Google search engine'
    ),
    (
        'Bing', 'https://www.bing.com', 9, 'Microsoft search engine'
    ),
    (
        'Yahoo', 'https://www.google.com/', 9, 'Yahoo search engine'
    ),
    (
        'CNN', 'http://www.cnn.com/', 7, 'CNN Homepage'
    ),
    (
        'Ars Technica', 'https://arstechnica.com/', 3, 'Ars Technica Homepage'
    );