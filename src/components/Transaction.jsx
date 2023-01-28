const Transaction = ({ name, datetime, type, description, price }) => {
  const date = new Date(datetime).toLocaleString('en-us', );
  console.log(date);
  return (
    <div className='transaction'>
      <div className='left'>
        <div className='name'>{name}</div>
        <div className='description'>{description}</div>
      </div>
      <div className='right'>
        <div className='price red'>{price}</div>
        <div className='datetime'>{date}</div>
      </div>
    </div>
  );
};
export default Transaction;
