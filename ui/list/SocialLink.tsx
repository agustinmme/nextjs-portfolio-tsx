import {Link, Stack, StackProps} from "@chakra-ui/react";
import React from "react";
import {SiGithub, SiDiscord, SiLinkedin} from "react-icons/si";
import {CopyToClipboard} from "react-copy-to-clipboard";

import Customizable from "../icons/Customizable";
import {useToast} from "../../hook/useToast";

const SocialLink: React.FC<StackProps> = ({...props}) => {
  const toast = useToast();

  return (
    <>
      <Stack isInline spacing={2} {...props}>
        <Link isExternal _hover={{textDecoration: "none"}} href="https://github.com/agustinmme">
          <Customizable icon={SiGithub} padding={2} size={14} title="Github" />
        </Link>
        <Link
          isExternal
          _hover={{textDecoration: "none"}}
          href="https://www.linkedin.com/in/agustinmme/"
        >
          <Customizable icon={SiLinkedin} padding={2} size={14} title="Linkedin" />
        </Link>
        <CopyToClipboard text="agustinmme#5628">
          <Customizable
            cursor="pointer"
            icon={SiDiscord}
            padding={2}
            size={14}
            title="Discord"
            onClick={() => {
              toast({
                title: "Discord",
                description: "Te he copiado mi usuario",
                status: "success",
                duration: 2000,
              });
            }}
          />
        </CopyToClipboard>
      </Stack>
    </>
  );
};

export default SocialLink;
