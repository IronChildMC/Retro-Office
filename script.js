function openApp(app) {
  const urls = {
    slides: "https://minimal-slides-1.preview.emergentagent.com",
    sheets: "https://vector-spreadsheet.preview.emergentagent.com",
    design: "https://design-studio-1025.preview.emergentagent.com",
    write: "https://write-studio-3.preview.emergentagent.com"
  };

  window.open(urls[app], "_blank");
}
