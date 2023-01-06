import {format, subDays, addDays} from  'date-fns';

export default function DateHeader({date,setDate}){
    const handleClick = function(e,type){
        if(type === 'add'){
            setDate(addDays(date, 1));
        }else if(type === 'sub'){
            setDate(subDays(date, 1));
        }
    }

    return (
        <div className="container-md pt-md-5 pt-2">
        <div className="row justify-content-md-center">
          <div className="col-md-4 d-flex ">
            <div className="btn-toolbar w-100 ">
              <div className="input-group w-100">
                <button className="btn btn-primary" onClick={(e)=>handleClick(e,'sub')}>Prev</button>
                <div className="pt-2 flex-grow-1 d-flex justify-content-center border">
                  <h4> {format(date, 'dd/MM/yyyy')} </h4>
                </div>
                <button className="btn btn-primary" onClick={(e)=>handleClick(e,'add')}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}