import React,{useState} from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Import styles for the editor


const EditPost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  
  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list':'ordered'}, {'list':'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]


  const POST_CATEGORIES = ["Agriculture", "Bussiness", "Education", "Entertainment", "Art", "Investment", "Uncategorised", "Weather", "Fashion", "Health"]







  return (
    <section className='create-post'>
      <div className='container'>
        <h2>Edit Post</h2>
        <p className='form__error-message'>This is an error message</p>
        <form className='form create-post__form'>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
          }
          </select>
          <ReactQuill className="q1-editor" modules={modules} formats={formats} value={description} onChange={setDescription} />
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'  />
          <button type="submit" className='btn primary'>Update</button>


       </form>
      </div>
    </section>
  )
}

export default EditPost