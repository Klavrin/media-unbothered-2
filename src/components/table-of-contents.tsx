const TableOfContents = () => {
  const contents = [
    'What information do we collect?',
    'How do we process your information?',
    'When and with whom do we share your personal information?',
    'Do we use cookies and other tracking technologies?',
    'Is your information transferred internationally?',
    'How long do we keep your information?',
    'Do we collect information from minors?',
    'What are your privacy rights?',
    'Controls for do-not-track features',
    'Do we make updates to this notice?',
    'How can you contact us about this notice?',
    'How can you review, update, or delete the data we collect from you?'
  ]

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Table of Contents</h2>

      <ol className="list-decimal pl-10">
        {contents.map((content) => (
          <li className="text-lg underline cursor-pointer">{content}</li>
        ))}
      </ol>

      <hr className="w-full h-[2px] bg-white opacity-40 rounded-full mt-8 mb-4" />

      <button className="text-lg">Back to top</button>
    </div>
  )
}

export default TableOfContents
