'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Menubar from './Menubar'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure(), Underline],
    editorProps: {
        attributes: {
            class: 'block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5 mt-1',
            
        },
    }
  })

  
  return (
    <div>
    <Menubar editor={editor}/>
    <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap