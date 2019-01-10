//Given a text, it will replace the html tags from it and will
//cut it to the wanted length
export const descriptionShortner = ({ desc, max }) => {
  desc = desc.replace(/<\/?[a-z]+>/g, "");
  return desc.length >= max ? `${desc.slice(0, max - 3)}...` : desc;
};
