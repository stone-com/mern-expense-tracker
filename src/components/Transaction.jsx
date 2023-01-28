const Transaction = ({ name, datetime, type, description, price }) => {
  const date = new Date(datetime).toLocaleString('en-us');
  return (
    <div className='transaction'>
      <div className='left'>
        <div className='name'>{name}</div>
        <div className='description'>{description}</div>
      </div>
      <div className='right'>
        <div className={'price ' + (type === 'expense' ? 'red' : 'green')}>
          {(type === 'expense' ? '-$' : '+$') + price}
        </div>
        <div className='datetime'>{date}</div>
      </div>
    </div>
  );
};
export default Transaction;
