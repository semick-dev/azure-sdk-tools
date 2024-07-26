import convict from 'convict';
import * as dotenv from 'dotenv';

dotenv.config();

export class DockerCliInput {
    readmeMdPath: string;
    typespecProjectFolderPath: string;
    tag: string;
    sdkList: string;
    specRepo: string;
    workDir: string;
    sdkRepo: string;
    resultOutputFolder: string;
    dockerLogger: string;
    autorestConfigFilePath: string;
    specLink: string;
    sdkWorkBranchLink: string;
    skipGeneration: boolean;
    isPublicRepo: boolean;
}

export const dockerCliInput = convict<DockerCliInput>({
    readmeMdPath: {
        default: '',
        env: 'README_MD_PATH',
        arg: 'readme',
        format: String,
        doc: 'The relative path to readme.md, which is from the root of spec repo'
    },
    typespecProjectFolderPath: {
        default: '',
        env: 'TYPESPEC_PROJECT',
        arg: 'typespec-project',
        format: String,
        doc: 'The relative path to typespec project folder, which is from the root of spec repo'
    },
    tag: {
        default: '',
        env: 'TAG',
        arg: 'tag',
        format: String,
        doc: 'The tag used to generated codes. If not defined, default tag will be used'
    },
    sdkList: {
        default: '',
        env: 'SDK',
        arg: 'sdk',
        format: String,
        doc: 'which language of sdks do you want to generate? you can input multi language splitted by comma'
    },
    specRepo: {
        default: '/spec-repo',
        env: 'SPEC_REPO',
        arg: 'spec-repo',
        format: String,
        doc: 'the absolute path of the mounted spec repo'
    },
    workDir: {
        default: '/work-dir',
        env: 'WORK_DIR',
        arg: 'work-dir',
        format: String,
        doc: 'the absolute path of work directory, which contains all sdk repos'
    },
    sdkRepo: {
        default: '/sdk-repo',
        env: 'SDK_REPO',
        arg: 'sdk-repo',
        format: String,
        doc: 'the absolute path of sdk repo'
    },
    resultOutputFolder: {
        default: '/tmp/output',
        env: 'RESULT_OUTPUT_FOLDER',
        arg: 'result-output-folder',
        format: String,
        doc: 'the absolute path of output folder, which stores the result of task engine'
    },
    dockerLogger: {
        default: 'docker.log',
        env: 'DOCKER_LOGGER',
        arg: 'docker-logger',
        format: String,
        doc: 'the path of docker.log. it will concat with resultOutputFolder'
    },
    autorestConfigFilePath: {
        default: '/autorest.md',
        env: 'AUTOREST_CONFIG_FILE_PATH',
        format: String,
        doc: `The absolute path to autorest configuration file. It's required when you want to input your own autorest config in generating data-plane sdk.`
    },
    specLink: {
        default: '',
        env: 'SPEC_LINK',
        arg: 'spec-link',
        format: String,
        doc: `The link to spec repo or spec PR.`
    },
    sdkWorkBranchLink: {
        default: '',
        env: 'SDK_WORK_BRANCH',
        arg: 'sdk-work-branch',
        format: String,
        doc: `The link of sdk work branch generated by pipeline.`
    },
    skipGeneration: {
        default: false,
        env: 'SKIP_GENERATION',
        arg: 'skip-generation',
        format: Boolean,
        doc: `Whether skip generation`
    },
    isPublicRepo: {
        default: true,
        env: 'IS_PUBLIC_REPO',
        arg: 'is-public-repo',
        format: Boolean,
        doc: `Whether Spec Repo is public. IT's related to authentication when running docker in pipeline. In other scenarios, it's always false`
    }
});