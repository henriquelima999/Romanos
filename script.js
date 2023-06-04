function decimalParaRomano(decimalNumber){
    var numero = document.getElementById('txtnumber')
    decimalNumber = Number(numero.value)
    numero.value = ''
    
    if(decimalNumber > 0 && decimalNumber < 4000){
      var decimais = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
      var romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    
      var resultado = ''
    
      for (var i = 0; i < decimais.length; i++) {
        while (decimalNumber >= decimais[i]) {
          resultado += romanos[i]
          decimalNumber -= decimais[i]
        }
      }
    
      window.alert('é ' + resultado)
  }else{
    window.alert('Favor digite um número considerado!')
  }

}


   
function romanoParaDecimal(romanNumeral){
    var texto = document.getElementById('txttext')
    romanNumeral = texto.value
    romanNumeral = romanNumeral.toUpperCase()                  //deixa maiusculo
    texto.value = ''

    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      }
    
      let result = 0
    
      for (let i = 0; i < romanNumeral.length; i++) {
        const current = romanValues[romanNumeral[i]]
        const next = romanValues[romanNumeral[i + 1]]
    
        if (next && current < next) {
          result -= current
        } else {
          result += current
        }
      }
      
      window.alert('é ' + result)  
   
}
