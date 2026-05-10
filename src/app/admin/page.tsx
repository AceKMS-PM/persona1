"use client";

import { useState } from "react";
import { useMutation } from "convex-react-client";
import { api } from "@/convex/_generated/api";
import { labelCps } from "@/lib/utils"; // I'll define this utility in a bit

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("articles");
  const createArticle = useMutation(api.articles.createArticle);
  const createProject = useMutation(api.projects.createProject);

  // State for Article Form
  const [articleForm, setArticleForm] = useState({
    title: "", slug: "", content: "", category: "", publishedDate: new Date().toISOString().split('T')[0], coverImage: "", authorId: "Admin"
  });

  // State for Project Form
  const [projectForm, setProjectForm] = useState({
    title: "", description: "", link: "", image: "", tags: "", date: new Date().toISOString().split('T')[0]
  });

  const handleArticleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createArticle(articleForm);
    alert("Article Published!");
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProject({
      ...projectForm,
      tags: projectForm.tags.split(",").map(t => t.trim())
    });
    alert("Project Added!");
  };

  return (
    <div className="min-h-screen bg-brand-canvas dark:bg-dark-canvas px-5 py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex justify-between items-end mb-12 border-b border-brand-outline pb-6">
          <h1 className="display-lg">Admin Console</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab("articles")} 
              className={`label-caps px-4 py-2 ${activeTab === "articles" ? "bg-brand-charcoal text-white" : "border border-brand-charcoal"}`}
            >
              Articles
            </button>
            <button 
              onClick={() => setActiveTab("projects")} 
              className={`label-caps px-4 py-2 ${activeTab === "projects" ? "bg-brand-charcoal text-white" : "border border-brand-charcoal"}`}
            >
              Projects
            </button>
          </div>
        </div>

        {activeTab === "articles" ? (
          <form onSubmit={handleArticleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="label-caps block mb-2">Title</label>
                <input 
                  className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                  value={articleForm.title}
                  onChange={e => setArticleForm({...articleForm, title: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="label-caps block mb-2">Slug (URL)</label>
                <input 
                  className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                  value={articleForm.slug}
                  onChange={e => setArticleForm({...articleForm, slug: e.target.value})}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label-caps block mb-2">Category</label>
                  <input 
                    className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                    value={articleForm.category}
                    onChange={e => setArticleForm({...articleForm, category: e.target.value})}
                  />
                </div>
                <div>
                  <label className="label-caps block mb-2">Date</label>
                  <input 
                    type="date"
                    className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                    value={articleForm.publishedDate}
                    onChange={e => setArticleForm({...articleForm, publishedDate: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="label-caps block mb-2">Cover Image URL</label>
                <input 
                  className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                  value={articleForm.coverImage}
                  onChange={e => setArticleForm({...articleForm, coverImage: e.target.value})}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="label-caps block mb-2">Content (Markdown/HTML)</label>
              <textarea 
                className="flex-1 p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none min-h-[400px]"
                value={articleForm.content}
                onChange={e => setArticleForm({...articleForm, content: e.target.value})}
                required
              />
              <button type="submit" className="label-caps bg-brand-charcoal text-white px-8 py-4 mt-6 hover:opacity-80 transition-opacity">
                Publish Article
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleProjectSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-6">
               <div>
                <label className="label-caps block mb-2">Project Title</label>
                <input 
                  className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                  value={projectForm.title}
                  onChange={e => setProjectForm({...projectForm, title: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="label-caps block mb-2">Project Image URL</label>
                <input 
                  className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                  value={projectForm.image}
                  onChange={e => setProjectForm({...projectForm, image: e.target.value})}
                />
              </div>
              <div>
                <label className="label-caps block mb-2">Tags (comma separated)</label>
                <input 
                  className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                  value={projectForm.tags}
                  onChange={e => setProjectForm({...projectForm, tags: e.target.value})}
                  placeholder="Nextjs, Convex, AI"
                />
              </div>
              <div>
                <label className="label-caps block mb-2">External Link</label>
                <input 
                  className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
                  value={projectForm.link}
                  onChange={e => setProjectForm({...projectForm, link: e.target.value})}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="label-caps block mb-2">Description</label>
              <textarea 
                className="flex-1 p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none min-h-[400px]"
                value={projectForm.description}
                onChange={e => setProjectForm({...projectForm, description: e.target.value})}
                required
              />
              <button type="submit" className="label-caps bg-brand-charcoal text-white px-8 py-4 mt-6 hover:opacity-80 transition-opacity">
                Add Project
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
