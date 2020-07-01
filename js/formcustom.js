import { storage } from "./storage"

export class FormCustom {
  constructor(form) {
    this.btnSubmit = document.querySelector('button[type="submit"]')
    this.fields =[...document.querySelectorAll('input')]
    this.form = form
    
    console.log(this.fields,typeof this.fields)

    this._handleSubmitForm = this._submitForm.bind(this)
    this._handleChange = this._change.bind(this)
    this._init()
  }

  _init() {
    this.btnSubmit.addEventListener('click', this._handleSubmitForm)
    this._listenHandleChange()
  }

  _submitForm(event) {
    console.log(event)
    event.preventDefault()
  
    if(!this.form.checkValidity()) {
      this.form.classList.add('invalid')
    } else {
      this.form.classList.remove('invalid')

      const dataForm = new FormData(this.form)
      const resume = {}

      for (let[name, value] of dataForm) {
          resume[name] = value
      }

      console.log(resume)
      storage.set(resume.firstname,resume)
      this.form.reset()
    }
  }

  _listenHandleChange() {
    this.fields.forEach((field) => {
      field.addEventListener('change', this._handleChange)
    })
  }

  _change(event) {
    console.log(event)
    const field = event.currentTarget
    console.log(field)
    if(!field.checkValidity()) {
      field.classList.add('invalid')
    } else {
      field.classList.remove('invalid')
    }
  }
}