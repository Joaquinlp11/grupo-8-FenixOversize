module.exports = (sequelize, DataTypes) => {
    const alias = 'Product';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        name: {
            type: DataTypes.STRING,
            notNULL: true
        },
        description: {
            type: DataTypes.STRING,
            notNULL: true
        },
        image: {
            type: DataTypes.STRING,
            notNULL: true
        },
        color: {
            type: DataTypes.STRING,
            notNULL: true
        },
        size: {
            type: DataTypes.INTEGER,
            notNULL: true
        },
        price: {
            type: DataTypes.INTEGER,
            notNULL: true
        },
        id_brand: {
            type: DataTypes.INTEGER,
            notNULL: true,
            references: {
                model: 'brands',
                key: 'id'
            }
        },
        id_category: {
            type: DataTypes.INTEGER,
            notNULL: true,
            references: {
                model: 'categorys',
                key: 'id'
            }

        },

        

       
    }
    const config = {
        tableName: 'products',
        timestamps: false
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = models =>{
        Product.belongsTo(models.Category, {
            as: 'categoria',
            timestamps: false,
            foreignKey: 'id_category'
        })
    },
    Product.associate = models =>{
        Product.belongsTo(models.Brand, {
            as: 'brands',
            timestamps: false,
            foreignKey: 'id_brand'
        })
    },
    Product.associate = models => {
        Product.belongsToMany(models.User, {
            as:'user',
            through: 'product_user',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })
    }
    return Product;
}

