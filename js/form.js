import { storage } from './storage'

export class FormNative {
  constructor(form) {
    console.log(form)
    this.form = form
    this.btnSubmit = this.form.querySelector('button[type="submit"]')
    this._handleSubmit = this._submit.bind(this)
    this._init()
  }

  _init() {
    this.btnSubmit.addEventListener('click', this._handleSubmit)  
  }

  _submit(event) { 
    event.preventDefault()

    if(!this.form.checkValidity()) {
      this.form.classList.add('invalid')
    } else {
      this.form.classList.remove('invalid')

    const formData = new FormData(this.form)

    const indexMonth = new Date().getMonth() 
    
    function getMonth(index) {
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']  
      return months[index]
    }
    const month = getMonth(indexMonth)     
        
    const dateSend = new Date().getFullYear() + ' ' + month + ' ' + new Date().getDate()
    formData.append('date', dateSend )
  
    const resume = {}
    
    for (let [key, value] of formData) {
        resume[key] = value
    }
    
    storage.set(resume.firstname,resume)
    console.log(resume)
    this.form.reset()   
    }        
  }
}