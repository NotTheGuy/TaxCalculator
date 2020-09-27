class Calculator{

    constructor(){}

    static Tax(tax_brackets, annual_income)
    {
        var output;
        try{
            if(!isNaN(annual_income))
            {
                var i;
                var value = 0;
                for(i=0; i < tax_brackets.length; i++){
                    if (annual_income > tax_brackets[i].range_end)
                    {
                        value += ((tax_brackets[i].range_end - tax_brackets[i].range_start)*tax_brackets[i].rate);
                    }else if(annual_income > tax_brackets[i].range_start){
                        value += ((annual_income - tax_brackets[i].range_start)*tax_brackets[i].rate);
                    }
                }
                output = String(value);
            }else throw "Invalid income, must be a number value";
        }catch(ex){
            output = ex;
        }finally{
            return output;
        }

    }

    static Superannuation(annual_income, rate)
    {
        var output;
        try{
            if(!isNaN(annual_income))
            {
                if (!isNaN(rate))
                {
                    output = ((annual_income / 100) * rate);

                }else throw "Invalid rate, must be a number value";
            }else throw "Invalid income, must be a number value";
        }catch (ex){
            output = ex;
        }finally{
            return output;
        }
    }
}