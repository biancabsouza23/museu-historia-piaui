# %% [markdown]
# # Extrator de Códigos do Museu História do Piauí

# %%
import requests
import json
import bs4 as bs
import os

BASE_URL = "https://museudehistoriadopiaui.ufpi.edu.br"


def time_it(func):
    def wrapper(*args, **kwargs):
        import time

        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start} seconds")
        return result

    return wrapper


# %%
def _extract_livros_categories(
    livros_url: str = f"{BASE_URL}/acervo/livros",
) -> list[dict]:
    response = requests.get(livros_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    categories = []

    main_div = soup.find("div", attrs={"role": "main"})
    categories_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for category_div in categories_div:
        # get p tag with category title
        category = category_div.find("p")
        if not category:
            continue
        text = category.text
        # get a tag from p tag
        url = category.find("a")
        if not url:
            continue
        url = BASE_URL + url.get("href")
        categories.append({"name": text, "url": url})
    return categories


def _extract_livros_from_category(category: dict) -> list[dict]:
    category_url = category["url"]
    response = requests.get(category_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    books = []

    main_div = soup.find("div", attrs={"role": "main"})
    books_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for book_div in books_div:
        # get drive url
        drive_url = book_div.find("div", class_="WIdY2d M1aSXe")
        if not drive_url:
            continue
        drive_url = drive_url.get("data-embed-download-url")
        # get title
        title = book_div.find("p", attrs={"dir": "ltr"})
        if not title:
            continue
        title = title.text
        books.append({"title": title, "drive_url": drive_url})
    return books


@time_it
def extract_livros() -> list[dict]:
    categories = _extract_livros_categories()
    for category in categories:
        category["content"] = _extract_livros_from_category(category)
    return categories


# %%
def _extract_jornais_categories(
    jornais_url: str = f"{BASE_URL}/acervo/jornais",
) -> list[dict]:
    response = requests.get(jornais_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    categories = []
    main_div = soup.find("div", attrs={"role": "main"})
    categories_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for category_div in categories_div:
        # get a tag
        category = category_div.find("a")
        if not category:
            continue
        # get href
        url = BASE_URL + category.get("href")
        if not url:
            continue
        # get p tag with category title
        text = category.find("p")
        if not text:
            continue
        text = text.text
        categories.append({"name": text, "url": url})
    return categories


def _extract_jornais_yearly_from_category(category: dict) -> list[dict]:
    category_url = category["url"]
    response = requests.get(category_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    years = []

    main_div = soup.find("div", attrs={"role": "main"})
    years_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for year_div in years_div:
        # get a tag
        year = year_div.find("a", class_="XqQF9c")
        if not year:
            continue
        # get href
        url = BASE_URL + year.get("href")
        if not url:
            continue
        # get p tag with year title
        text = year.find("span")
        if not text:
            continue
        text = text.text
        years.append({"name": text, "url": url})
    return years


def _extract_jornais_from_year(year: dict) -> list[dict]:
    year_url = year["url"]
    # Handle Jornal do Piaui - 1975 case
    if "https://sites.google.com/" in year_url:
        return []
    response = requests.get(year_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    jornais = []

    main_div = soup.find("div", attrs={"role": "main"})
    jornais_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for jornal_div in jornais_div:
        # get drive url
        drive_url = jornal_div.find("div", class_="WIdY2d M1aSXe")
        if not drive_url:
            continue
        drive_url = drive_url.get("data-embed-download-url")
        # get title
        title = jornal_div.find("p", attrs={"dir": "ltr"})
        if not title:
            continue
        title = title.text
        jornais.append({"title": title, "drive_url": drive_url})
    return jornais


@time_it
def extract_jornais() -> list[dict]:
    categories = _extract_jornais_categories()
    for category in categories:
        category["years"] = _extract_jornais_yearly_from_category(category)
        for year in category["years"]:
            year["content"] = _extract_jornais_from_year(year)
    return categories


# %%


def _extract_revistas_categories(
    revistas_url: str = f"{BASE_URL}/acervo/revistas",
) -> list[dict]:
    response = requests.get(revistas_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    categories = []
    main_div = soup.find("div", attrs={"role": "main"})
    categories_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for category_div in categories_div:
        # get a tag
        category = category_div.find("a")
        if not category:
            continue
        # get href
        url = BASE_URL + category.get("href")
        if not url:
            continue
        # get p tag with category title
        text = category.find("span")
        if not text:
            continue
        text = text.text
        categories.append({"name": text, "url": url})
    return categories


def _extract_revistas_from_category(category: dict) -> list[dict]:
    category_url = category["url"]
    response = requests.get(category_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    revistas = []

    main_div = soup.find("div", attrs={"role": "main"})
    revistas_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for revista_div in revistas_div:
        # get drive url
        drive_url = revista_div.find("div", class_="WIdY2d M1aSXe")
        if not drive_url:
            continue
        drive_url = drive_url.get("data-embed-download-url")
        # get title
        title = revista_div.find("p", attrs={"dir": "ltr"})
        if not title:
            continue
        title = title.text
        revistas.append({"title": title, "drive_url": drive_url})
    return revistas


@time_it
def extract_revistas() -> list[dict]:
    categories = _extract_revistas_categories()
    for category in categories:
        category["content"] = _extract_revistas_from_category(category)
    return categories


# %%


def _extract_dissertacoes_teses_categories(
    dissertacoes_teses_url: str = f"{BASE_URL}/acervo/tcc-disserta%C3%A7%C3%B5es-e-teses",
) -> list[dict]:
    response = requests.get(dissertacoes_teses_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    categories = []
    main_div = soup.find("div", attrs={"role": "main"})
    categories_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for category_div in categories_div:
        # get a tag
        category = category_div.find("a")
        if not category:
            continue
        # get href
        url = BASE_URL + category.get("href")
        if not url:
            continue
        # get p tag with category title
        text = category.find("span")
        if not text:
            continue
        text = text.text
        categories.append({"name": text, "url": url})
    return categories


def _extract_dissertacoe_teses_from_category(category: dict) -> list[dict]:
    category_url = category["url"]
    response = requests.get(category_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    dissertacoes_teses = []

    main_div = soup.find("div", attrs={"role": "main"})
    dissertacoes_teses_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for dissertacao_tese_div in dissertacoes_teses_div:
        # get drive url
        drive_url = dissertacao_tese_div.find("div", class_="WIdY2d M1aSXe")
        if not drive_url:
            continue
        drive_url = drive_url.get("data-embed-download-url")
        # get title
        title = dissertacao_tese_div.find("p", attrs={"dir": "ltr"})
        if not title:
            continue
        title = title.text
        dissertacoes_teses.append({"title": title, "drive_url": drive_url})
    return dissertacoes_teses


@time_it
def extract_dissertacoes_teses() -> list[dict]:
    categories = _extract_dissertacoes_teses_categories()
    for category in categories:
        category["content"] = _extract_dissertacoe_teses_from_category(category)
    return categories


# %%


def _extract_periodicos_seculo_xixxx_categories(
    periodicos_url: str = f"{BASE_URL}/acervo/periódicos-do-século-xix-xx",
) -> list[dict]:
    response = requests.get(periodicos_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    categories = []
    main_div = soup.find("div", attrs={"role": "main"})
    categories_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for category_div in categories_div:
        # get a tag
        category = category_div.find("a")
        if not category:
            continue
        # get href
        url = BASE_URL + category.get("href")
        if not url:
            continue
        # get p tag with category title
        text = category.find("span")
        if not text:
            continue
        text = text.text
        categories.append({"name": text, "url": url})
    return categories


def _extract_periodicos_seculo_xixxx_from_category(category: dict) -> list[dict]:
    category_url = category["url"]
    response = requests.get(category_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    periodicos_seculo_xixxx = []

    main_div = soup.find("div", attrs={"role": "main"})
    periodicos_seculo_xixxx_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for periodico_seculo_xixx_div in periodicos_seculo_xixxx_div:
        # get drive url
        drive_url = periodico_seculo_xixx_div.find("div", class_="WIdY2d M1aSXe")
        if not drive_url:
            continue
        drive_url = drive_url.get("data-embed-download-url")
        # get title
        title = periodico_seculo_xixx_div.find("p", attrs={"dir": "ltr"})
        if not title:
            continue
        title = title.text
        periodicos_seculo_xixxx.append({"title": title, "drive_url": drive_url})
    return periodicos_seculo_xixxx


@time_it
def extract_periodicos_seculo_xixxx() -> list[dict]:
    categories = _extract_periodicos_seculo_xixxx_categories()
    for category in categories:
        category["content"] = _extract_periodicos_seculo_xixxx_from_category(category)
    return categories


# %%


def _extract_documentos_categories(
    documentos_url: str = f"{BASE_URL}/acervo/documentos-acadêmicos-e-científicos",
) -> list[dict]:
    response = requests.get(documentos_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    categories = []
    main_div = soup.find("div", attrs={"role": "main"})
    categories_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for category_div in categories_div:
        # get a tag
        category = category_div.find("a")
        if not category:
            continue
        # get href
        url = BASE_URL + category.get("href")
        if not url:
            continue
        # get p tag with category title
        text = category.find("span")
        if not text:
            continue
        text = text.text
        categories.append({"name": text, "url": url})
    return categories


def _extract_documentos_from_category(category: dict) -> list[dict]:
    category_url = category["url"]
    response = requests.get(category_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    documentos = []

    main_div = soup.find("div", attrs={"role": "main"})
    documentos_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for documento_div in documentos_div:
        # get drive url
        drive_url = documento_div.find("div", class_="WIdY2d M1aSXe")
        if not drive_url:
            continue
        drive_url = drive_url.get("data-embed-download-url")
        # get title
        title = documento_div.find("p", attrs={"dir": "ltr"})
        if not title:
            continue
        title = title.text
        documentos.append({"title": title, "drive_url": drive_url})
    return documentos


@time_it
def extract_documentos() -> list[dict]:
    categories = _extract_documentos_categories()
    for category in categories:
        category["content"] = _extract_documentos_from_category(category)
    return categories


# %%

photos_folder_directory = "photos"
os.makedirs(photos_folder_directory, exist_ok=True)


def _extract_photos_categories(
    photos_url: str = f"{BASE_URL}/acervo/fotos-e-vídeos/",
) -> list[dict]:
    response = requests.get(photos_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    categories = []
    main_div = soup.find("div", attrs={"role": "main"})
    categories_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for category_div in categories_div:
        # get a tag
        category = category_div.find("a")
        if not category:
            continue
        # get href
        url = BASE_URL + category.get("href")
        if not url:
            continue
        # get p tag with category title
        text = category.find("p")
        if not text:
            continue
        text = text.text
        # get img tag
        img = category_div.find("img")
        if not img:
            continue
        img = img.get("src")
        # download image
        img_response = requests.get(img)
        img_response.raise_for_status()
        img_path = f"{photos_folder_directory}/{text}.jpg"
        os.makedirs(os.path.dirname(img_path), exist_ok=True)
        with open(img_path, "wb") as f:
            f.write(img_response.content)
        categories.append({"name": text, "url": url, "img": img_path})
    return categories


def _extract_photos_from_category(category: dict) -> list[dict]:
    index = 0
    category_url = category["url"]
    response = requests.get(category_url)
    response.raise_for_status()
    soup = bs.BeautifulSoup(response.text, "html.parser")
    photos = []

    main_div = soup.find("div", attrs={"role": "main"})
    photos_div = main_div.find_all("div", attrs={"jsname": "F57UId"})
    for photo_div in photos_div:
        # get span tag with photo title
        title = photo_div.find("span")
        if not title:
            continue
        title = title.text
        # get img tag
        img = photo_div.find("img")
        if not img:
            continue
        img_src = img.get("src")
        # download image
        img_response = requests.get(img_src)
        img_response.raise_for_status()
        img_path = f"{photos_folder_directory}/{category['name']}/{index}.jpg"
        os.makedirs(os.path.dirname(img_path), exist_ok=True)
        with open(img_path, "wb") as f:
            f.write(img_response.content)
        photos.append({"title": title, "path": img_path, "url": img_src})
        index += 1
    return photos


@time_it
def extract_photos() -> list[dict]:
    categories = _extract_photos_categories()
    for category in categories:
        category["content"] = _extract_photos_from_category(category)
    return categories


# %%

periodicos_seculo_xixxx = extract_periodicos_seculo_xixxx()

with open("periodicos_seculo_xixxx.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(periodicos_seculo_xixxx, indent=4))

# %%

dissertacoes_teses = extract_dissertacoes_teses()

with open("dissertacoes_teses.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(dissertacoes_teses, indent=4))

# %%

revistas = extract_revistas()

with open("revistas.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(revistas, indent=4))

# %%

jornais = extract_jornais()

with open("jornais.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(jornais, indent=4))


# %%
livros = extract_livros()

with open("livros.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(livros, indent=4))


# %%

documentos = extract_documentos()

with open("documentos.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(documentos, indent=4))

# %%
photos = extract_photos()

with open("photos.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(photos, indent=4))

# %%
