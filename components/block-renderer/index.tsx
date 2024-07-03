import { v4 } from "uuid";
import { Column } from "./column";
import { Columns } from "./columns";
import { Cover } from "./cover";
import { Heading } from "./heading";
import { ImageBlock } from "./image-block";
import Paragraph from "./paragraph";
import { PostTitle } from "./post-title";
import { Separator } from "./seperator";
import { List, ListItem } from "./list";
import { ImageParagraphAnimated } from "./image-paragraph-animation";
import { Carousel } from "./carousel";
import { PrestationCard } from "./prestation-card";
import { ContactUsForm } from "./contact-us-form";

export const BlockRenderer = ({ blocks }: { blocks: any[] }) => {
  return <>{(blocks || []).map((block: any) => {
    const { name } = block;
    switch (name) {
      case 'core/block':
      case 'core/group':
        return <BlockRenderer key={v4()} blocks={block.innerBlocks} />
      case 'core/post-title':
        return <PostTitle key={v4()}
          content={block.attributes.content}
          textAlign={block.attributes.textAlign}
          textColor={block.attributes.textColor}
        />
      case 'core/cover':
        return <Cover key={v4()} attributes={block.attributes}><BlockRenderer blocks={block.innerBlocks} /></Cover>
      case 'core/image':
        return <ImageBlock key={v4()} attributes={block.attributes} />
      case 'core/columns':
        return <Columns key={v4()} attributes={block.attributes}><BlockRenderer blocks={block.innerBlocks} /></Columns>
      case 'core/column':
        return <Column key={v4()} attributes={block.attributes}><BlockRenderer blocks={block.innerBlocks} /></Column>
      case "core/heading":
        return (
          <Heading
            key={v4()}
            attributes={block.attributes}
          ></Heading>
        );
      case "core/paragraph":
        return (
          <Paragraph
            key={v4()}
            attributes={block.attributes}
          ></Paragraph>
        );
      case 'acf/image-paragraph':
        return <ImageParagraphAnimated key={v4()} data={block.attributes?.data}></ImageParagraphAnimated>
      case 'core/list':
        return <List attributes={block.attributes} key={v4()}><BlockRenderer blocks={block.innerBlocks} /></List>
      case 'core/list-item':
        return <ListItem key={v4()} attributes={block.attributes}></ListItem>
      case 'core/separator':
        return <Separator key={v4()} attributes={block.attributes}></Separator>
      case 'acf/carousel':
        return <Carousel key={v4()} data={block.attributes.data}></Carousel>
      case 'acf/prestation-card':
        return <PrestationCard key={v4()} data={block.attributes.data}></PrestationCard>
      case 'acf/form-generator':
        switch (block.attributes?.data?.name) {
          case 'contact-us-form':
            return <ContactUsForm key={v4()} data={block.attributes.data}></ContactUsForm>
          case 'home':
            return <HomeForm key={v4()}></HomeForm>
        }
      default:
        console.log('unkown block', block)
    }
  })}</>
};
