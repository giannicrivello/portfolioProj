Notes on next

about implementing getStaticProps():

- for now just implement getStaticProps() from index.js and any child component just needs to take props and handle what to do with them. 
- I am making the assumption that we can make a really big getStaticProps to pass to our children as needed.
- as the documentation says, getStaticProps() can only be exported from a page (something happening under the next.js hood).
- 
