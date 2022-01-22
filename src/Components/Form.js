import FormInput from "./FormInput"

const Form = (props) => {

    const SaveFormDataHandler = (formData) => {
        const dataWidthId = {
            ...formData,
            id: Math.random().toString()
        }
      props.onAddFormData(dataWidthId)
    }

    return (
        <div>
            <FormInput onSaveFormData={SaveFormDataHandler}/>
        </div>
    )
}
export default Form;