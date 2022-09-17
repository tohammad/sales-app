const ProductList = ({items = [], action, handleNoOfItems, handleSubmit}) => {
    return items.map((item) => (
      <div className="box" key={item.code}>
        <div className="left">
        {action === "add" && `${item.name}: $${item.price}`}
        {action === "remove" &&
          `(${handleNoOfItems(item.code)} x ${item.price}) ${item.name}`}
          </div>
          <div className="right">
        <button className='button' type="submit" data-testid={`btn-${action}-${item.code}`} onClick={() => handleSubmit(item)}>
        <i className={`fa ${action === 'add' ? 'fa-plus': 'fa-trash'}`}></i>
        </button>
        </div>
      </div>
    ));
};

export default ProductList;
