import urllib, urllib.request
url = 'http://export.arxiv.org/api/query?search_query=electron&start=0&max_results=20'
data = urllib.request.urlopen(url)
print(data.read().decode('utf-8'))
