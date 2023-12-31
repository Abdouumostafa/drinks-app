import Wrapper from "../assets/wrappers/SearchForm"
import { Form, useNavigation } from "react-router-dom"

const SearchForms = ({searchTerm}) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input type="search" name="search" className=" form-input" />
        <button type="submit" className="btn" disabled={isSubmitting} defaultValue={searchTerm}>
          {isSubmitting? 'searching ...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  )
}
export default SearchForms