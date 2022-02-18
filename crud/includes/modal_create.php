<div id="modal-close-default" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Crear un nuevo producto</h2>
         <div class="container">
             <label for="">ASIGNAR UN CODIGO:</label>
             <input type="text" id="code" class="form-control rounded-pill">
             <label for="">NOMBRE DEL PRODUCTO:</label>
             <input type="text" id="name" class="form-control rounded-pill">
             <label for="">PRECIO DEL PRODUCTO:</label>
             <input type="number" id="price" class="form-control rounded-pill">
             <label for="">NOMBRE CATEGORIA:</label>
             <input type="text" id="cat" class="form-control rounded-pill">
            </div>
      <hr>
      <button class="btn btn-primary rounded-pill" onclick="CreateItems()">Crear Nuevo Item</button>
    </div>
</div>