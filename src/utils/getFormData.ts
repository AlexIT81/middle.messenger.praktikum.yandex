export default function getFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData.entries()));
}
