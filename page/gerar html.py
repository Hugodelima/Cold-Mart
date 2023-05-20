arquivo2 = open('../index.html','r')
conteudo = arquivo2.read()

for i in range(0,18):
    arquivo = open(str(i) + '.html','w')
    arquivo.write(conteudo)

    arquivo.close()


arquivo2.close()