# Angular Container/Presenter Blueprint

A template repository for building **scalable Angular applications** using a clean **Container/Presenter architecture**, feature‑based structure, and strict separation between UI and business logic.  
This blueprint provides conventions that promote maintainability, reusability, and clarity in medium and large Angular frontends.

---

## 🧱 Architecture Overview

This template implements the **Container / Presenter Pattern**, structured into:

### **Container Components (Smart)**

- Handle data loading and orchestration.
- Communicate with facades and services.
- Map UI events → business operations.
- Do **not** contain UI logic.

Example:  
`features/todos/containers/todos-page/`

### **Presenter Components (Dumb)**

- Pure UI components.
- Stateless and reusable.
- Receive data via `@Input()`.
- Emit events via `@Output()`.
- No business logic.

Example:  
`features/todos/components/todos-list/`  
`features/todos/components/todos-stats/`

### **Data‑Access Layer**

- Contains facades, services, and domain models.
- Facade acts as the single access point for the feature.
- Services encapsulate HTTP calls or mock data.

Example:  
`features/todos/data-access/`

This results in a clear, testable, scalable Angular architecture with minimal coupling.

---

## 📁 Suggested Project Structure

```text
src/
 ├─ main.ts
 ├─ app.config.ts
 └─ app/
     ├─ core/                          # Global services, interceptors, guards
     ├─ shared/                        # Reusable UI and utilities
     │   ├─ ui/                        # Generic presentational components (buttons, cards…)
     │   ├─ directives/
     │   └─ pipes/
     └─ features/
         └─ todos/                     # Example feature
             ├─ containers/            # Container (smart) components
             │   └─ todos-page/
             │       ├─ todos-page.container.ts
             │       ├─ todos-page.container.html
             │       ├─ todos-page.container.css
             │       └─ todos-page.container.spec.ts
             ├─ components/            # Presenter (dumb) components
             │   ├─ todos-list/
             │   │   ├─ todos-list.component.ts
             │   │   ├─ todos-list.component.html
             │   │   ├─ todos-list.component.css
             │   │   └─ todos-list.component.spec.ts
             │   └─ todos-stats/
             │       ├─ todos-stats.component.ts
             │       ├─ todos-stats.component.html
             │       ├─ todos-stats.component.css
             │       └─ todos-stats.component.spec.ts
             └─ data-access/           # Models, services, facades
                 ├─ todo.model.ts
                 ├─ todos.facade.ts
                 ├─ todos.service.ts
                 └─ todos.service.spec.ts
```

> File and folder names may be adapted to your organization’s naming conventions.

---

## 🧰 Tech Stack

| Component         | Version     | Notes                                |
| ----------------- | ----------- | ------------------------------------ |
| **Angular**       | 18+         | Standalone components, signals ready |
| **Node**          | 20+         | Recommended LTS                      |
| **Nx (Optional)** | Latest      | Can be added for monorepo scaling    |
| **RxJS**          | 7+          | Stream + async orchestration         |
| **TypeScript**    | Strict mode | Enforced by template                 |

---

# 🧩 Example Feature: Todos

Included to demonstrate the full pattern:

### ✔ `TodosPageContainer`

Smart component responsible for:

- Loading todos
- Exposing streams (`todos$`, `loading$`)
- Handling toggle/remove actions
- Delegating UI to presenters

### ✔ `TodosListComponent`

Presenter responsible for:

- Displaying list of todos
- Emitting `toggle` + `remove` events

### ✔ `TodosStatsComponent`

Presenter responsible for:

- Showing total, completed, pending counters

### ✔ `TodosFacade`

- Connects container ↔ services
- Maintains reactive state
- Encapsulates feature logic

### ✔ `TodosService`

Mock or API-based implementation.

---

# 📡 Development Commands

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

---

# ⚙️ Base Application Configuration

This template uses:

- Strict mode enabled
- Standalone Angular application (no NgModules)
- Feature-based routing
- Shared UI library (`shared/ui`)
- Global styles in `styles.css`

You can expand with:

- HTTP interceptors
- Global error handling
- Authentication module
- API layer
- Design‑system components

---

## 🚀 Getting Started

### 1. Create a new Angular app from this template

Click **“Use this template” → “Create a new repository”**.

### 2. Clone your new repository

```bash
git clone https://github.com/<your-org>/<your-angular-app>.git
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start building your application

Use the provided Todos feature as a reference for:

- New containers
- New presenters
- New facades
- New data-access modules

---

## 🧪 Testing Strategy

This template supports:

### Unit Tests

- Presenter components
- Container components
- Facades
- Services

### Integration Tests

- Component interaction tests
- Feature‑level rendering tests

### E2E (Optional)

You can integrate Cypress or Playwright on top of this template.

---

## 🧩 Extending the Blueprint

Common enhancements include:

- Add `shared/ui` components (Button, Card, Spinner…)
- Add API layer using HttpClient
- Add local storage service
- Add global state logic (optional)
- Add routing guards, auth modules
- Add i18n support
- Add Nx and convert into a design‑system-ready workspace
- Add CI/CD pipelines

The template is intentionally minimal so teams can extend it freely.

---

## 📚 Philosophy

The objective of this template is to:

- Standardize Angular frontend creation
- Promote scalable frontend architecture
- Separate UI from logic
- Encourage reusable presentation components
- Reduce cognitive load and boilerplate
- Provide a clean, maintainable foundation

If your frontend becomes spaghetti code despite this template…  
statistically, the problem is you — not the template 😄

---

## 🤝 Contributing

If you improve this blueprint or generalize a pattern, feel free to open a Pull Request.  
If you introduce antipatterns, feel free not to.

---

## 📄 License

This project is released under **MIT** — use it freely.
