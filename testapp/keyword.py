from krwordrank.hangle import normalize
from krwordrank.word import KRWordRank

class Krwordrank:
    def wordrank(texts):
        texts = [normalize(text, english=False, number=False) for text in texts]

        wordrank_extractor = KRWordRank(
            min_count = 5, # 단어의 최소 출현 빈도수
            max_length = 10, # 단어의 최대 길이
            verbose = True
            )

        beta = 0.85    # PageRank의 decaying factor beta
        max_iter = 10

        keywords, rank, graph = wordrank_extractor.extract(texts, beta, max_iter)

        
        words = []
        for word in sorted(keywords):
            words.append(word)
        
        return words