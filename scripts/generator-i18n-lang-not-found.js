
const postPermalink = (post) => hexo.execFilterSync('post_permalink', post, {context: hexo});

const postPermalinkBylang = (post, lang) => {
    const cacheLang = post.lang;
    post.lang = lang;
    const path = postPermalink(post);
    post.lang = cacheLang;
    return path;
};

const generatorNotFoundPost = (path, lang) => {
    return {
        path: path,
        data: {
            title: 'Sorry! Post Not Found',
            lang: lang,
            permalink: path,
            // content: ''
        },
        layout: ['post'],
    };
}

hexo.extend.generator.register('i18n-lang-not-found', function(locals){
    const config = this.config;
    if(!config.language) {
        return [];
    }
    const languages = new Set(config.language.filter(lang => lang !== 'default'));
    return Array.from(locals.posts.reduce((map, post) => {
        if (languages.has(post.lang) && !map.delete(postPermalink(post))) {
            languages.forEach((lang) => {
                if (lang === post.lang) {
                    return;
                };
                const _path = postPermalinkBylang(post, lang);
                map.set(_path, generatorNotFoundPost(_path, lang));
            });
        }
        return map;
    }, new Map()).values());
});