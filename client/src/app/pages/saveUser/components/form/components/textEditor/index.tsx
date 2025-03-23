import { FieldError } from "react-hook-form"
import ReactQuill from "react-quill-new"
import "react-quill-new/dist/quill.snow.css"

interface TextEditorProps {
  value: string
  onChange: (value: string) => void
  errors: FieldError | undefined
}

export const TextEditor = ({ value, onChange, errors }: TextEditorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black-100">Descrição da Organização:</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="border rounded-md"
      />
      {errors && (
        <p className="text-evoe-red w-full mt-1 text-evoe-sm">
          {errors.message}
        </p>
      )}
    </div>
  )
}
