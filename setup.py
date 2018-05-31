from setuptools import setup

exec (open('pyldavis_dash/version.py').read())

setup(
    name='pyldavis_dash',
    version=__version__,
    author='antisrdy',
    packages=['pyldavis_dash'],
    include_package_data=True,
    license='MIT',
    description='pyLDAvis to Dash',
    install_requires=[]
)
