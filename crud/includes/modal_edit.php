<div id="my-id" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">EDITAR ITEM</h2>
        <div class="container">
             <label for="">ASIGNAR UN CODIGO:</label>
             <input type="text" id="code_"  readonly class="form-control rounded-pill">
             <label for="">NOMBRE DEL PRODUCTO:</label>
             <input type="text" id="name_" class="form-control rounded-pill">
             <label for="">PRECIO DEL PRODUCTO:</label>
             <input type="number" id="price_" class="form-control rounded-pill">
             <label for="">NOMBRE CATEGORIA:</label>
             <input type="text" id="cat_" class="form-control rounded-pill">
            </div>
        <button class="btn btn-success mt-2" type="button" onclick="edit_item()">Editar Item</button>
    </div>
</div>