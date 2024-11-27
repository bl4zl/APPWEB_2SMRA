#iván jimenez alvarez 
#20/11/2024
#programa que ordena los numeros de una lista de mayor a menor 

lista = [5,3,8,1]

for i in range(len(lista)-1):
    if lista[i] >= lista[i+1]:
        lista2 = lista[i]
        print(lista2)

    elif lista[i] <= lista[i+1]:
        lista2 + i+1
        print(lista2) 