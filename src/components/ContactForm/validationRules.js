export default function validate(values) {
  let errors = {};
  if (!values.asset) {
    errors.asset = "Asset is required";
  }
  if (!values.value) {
    errors.value = "Asset Value is required";
  }
  if (!values.description) {
    errors.description = "Asset Description is required";
  }
  return errors;
}
