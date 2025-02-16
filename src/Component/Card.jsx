

export const Card = () => {
    return (
        <div className="ml-4 mt-4 w-[250px] shadow-slate-400 shadow-xl rounded-md">
            <div>
                <img className="w-full rounded-t-md"
                src="https://images.unsplash.com/photo-1579445710183-f9a816f5da05?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="avesgers movie poster"/>
            </div>
            
            <div className="p-2 space-y-1 bg-gray-300 rounded-b-md">
                 <div className="flex justify-between font-bold text-[13px]">
                    <p>Avengers: Endgame</p>
                    <p>8.8/10</p>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px] font-bold">
                    <p>LAST UPDATE</p>
                    <p>1000 Time</p>
                </div>
                <div className="flex justify-between text-[10px] font-bold">
                    <p>SUN 8 SEPT - 10:00PM</p>
                    <p>21HR 08MIN</p>
                </div>
            </div>
           
        </div>
    )
};