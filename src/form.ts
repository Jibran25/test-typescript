export const getFormData = (html: HTMLFormElement) => {
        const inputs = html.querySelectorAll('input');
        const values:  {[key: string]:string} = {}

        inputs.forEach((inputs:HTMLInputElement)=>{
            if(inputs.type != 'submit'){
                values[inputs.name] = inputs.value;
            }
        });

        return values;
}