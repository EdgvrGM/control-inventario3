// Elementos del html
var nameP = document.getElementById("nombre");
var code = document.getElementById("codigo");
var desc = document.getElementById("descripcion");
var cant = document.getElementById("cantidad");
var costo = document.getElementById("costo");
var pos = document.getElementById("posicion");
var delCode = document.getElementById("deleteCode");
var search = document.getElementById("searchCode");
var li = document.getElementById("listar");
var li2 = document.getElementById("listar2");

// Botones
var btnAdd = document.getElementById("addNew");
var btnDel = document.getElementById("deleteBtn");
var btnSearch = document.getElementById("searchBtn");
var btnRec = document.getElementById("recuperar");
var btnRec2 = document.getElementById("recuperarInv");

// Clases
class Producto {
  constructor(nombre, codigo, descripcion, cantidad, costo) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.costo = costo;
    this.siguiente = null;
  }
  calcularPrecio() {
    let productos = this.cantidad;
    let precioProducto = this.costo;
    let total = productos * precioProducto;
    return total;
  }
}

class Vector {
  constructor() {
    this.arr = [];
    this.capacidad = 20;
    this.t = 0;
    this.inicio = null;
  }

  addNew(product) {
    if (this.inicio == null) {
      this.inicio = product;
    } else {
      let aux = this.inicio;
      while (aux.siguiente !== null) {
        aux = aux.siguiente;
      }
      aux.siguiente = product;
    }
    this.t++;
    return product.product;
  }

  delete(code) {
    if (code < 0 || code > this.t) {
      return false;
    }
    let aux = this.inicio;
    let anterior = null;

    if (code == 0) {
      this.head = aux.siguiente;
    } else {
      for (let i = 0; i < code; i++) {
        anterior = aux;
        aux = aux.siguiente;
      }
      anterior.siguiente = aux.siguiente;
    }
    this.t--;
    return aux.product;
  }

  search(code) {
    if (code < 0 || code >= this.t) {
      return false;
    }
    let aux = this.inicio;
    let anterior = null;

    if (code == 0) {
      return aux.producto;
    } else {
      for (let i = 0; i < code; i++) {
        anterior = aux;
        aux = aux.siguiente;
      }
      return aux.product;
    }
  }
  getList() {
    let aux = this.inicio;
    let list = "";
    while (aux) {
      lista += aux.product += " - ";
      aux = aux.siguiente;
    }
    list += "Proceso finalizado";
    return list;
  }

  getInvList() {
    let i = 0;
    this.arr.reverse();
    while (i <= this.arr.length) {
      li2.innerHTML += `${this.arr[i].nombre} <br/>`;
      i++;
    }
    this.arr.reverse();
  }
  addNew2(product, pos) {
    if (pos < 0 || this.capacidad.length >= this.t) {
      return false;
    } else {
      let aux = this.inicio;
      let anterior;
      if (pos == 0) {
        product.siguiente = aux;
        this.inicio = product;
      } else {
        for (let i = 0; i < pos; i++) {
          anterior = aux;
          aux = aux.siguiente;
        }
        product.siguiente = aux;
        anterior.siguiente = product;
      }
      this.tamano++;
    }
    return producto.producto;
  }
}

// Interaccion con la interfaz

let array = new Vector();
let product = "";
btnAdd.addEventListener("click", () => {
  if (pos > 0 && pos <= 20) {
    product = new Producto(
      nameP.value,
      code.value,
      desc.value,
      cant.value,
      costo.value
    );
    array.addNew2(product);
  } else {
    product = new Producto(
      nameP.value,
      code.value,
      desc.value,
      cant.value,
      costo.value
    );
    array.addNew(product);
  }
});

btnDel.addEventListener("click", () => {
  array.delete(delCode.value);
});

btnSearch.addEventListener("click", () => {
  array.search(search.value);
});

btnRec.addEventListener("click", () => {
  li.innerHTML = "";
  array.getList();
});

btnRec2.addEventListener("click", () => {
  li2.innerHTML = "";
  array.getInvList();
});
